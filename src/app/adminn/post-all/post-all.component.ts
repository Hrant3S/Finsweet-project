import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BlogPost } from 'src/app/component/all-post/all-post.component';
import { RequestService } from 'src/app/service/service/request.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-post-all',
  templateUrl: './post-all.component.html',
  styleUrls: ['./post-all.component.css'],
})
export class PostAllComponent implements OnInit {
  btnclik: string = '';
  forms: boolean = false;
  id: number = 0;
  displayedColumns: string[] = [
    'id',
    'img',
    'text',
    'title',
    'textUs',
    'dataText',
    'dataSpanText',
    'Action',
  ];
  form: FormGroup = new FormGroup({});

  dataSource!: MatTableDataSource<BlogPost>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private request: RequestService, public fm: FormBuilder) {}

  // ngAfterViewInit(): void {
  // }

  ngOnInit(): void {
    this.form = this.fm.group({
      id: [''],
      img: [''],
      title: [''],
      text: [''],
      textUs: [''],
      dataText: [''],
      dataSpanText: [''],
    });
    this.getBlogPost();
  }

  add() {
    this.forms = !this.forms;
    this.btnclik = 'Add';
  }

  submit() {
    if (this.btnclik == 'Add') {
      let self: BlogPost = {
        img: this.form.get('img')?.value,
        text: this.form.get('text')?.value,
        title: this.form.get('title')?.value,
        textUs: this.form.get('textUs')?.value,
        dataText: this.form.get('dataText')?.value,
        dataSpanText: this.form.get('dataSpanText')?.value,
        id: this.form.get('id')?.value,
      };
      if (confirm('Do your really want to add new Autors')) {
        this.request
          .postData<BlogPost>(environment.blogPost.get, self)
          .subscribe(() => {
            this.getBlogPost();
            this.forms = !this.forms;
            // this.formadd('none');
          });
      }
    } else if (this.btnclik == 'edit') {
      console.log('hello');

      if (confirm('Do you really want to confirm the change?')) {
        this.request
          .putData<BlogPost>(
            `${environment.blogPost.get}/${this.id}`,
            this.form.value
          )
          .subscribe(() => {
            this.getBlogPost();
            this.forms = !this.forms;
          });
      }
    }
  }

  addit(row: BlogPost) {
    this.forms = !this.forms;
    this.btnclik = 'edit';
    this.form.patchValue({
      img: row.img,
      text: row.text,
      title: row.title,
      textUs: row.textUs,
      dataText: row.dataText,
      dataSpanText: row.dataSpanText,
    });
    this.id = row.id;
  }

  delatebtn(id: number) {
    if (confirm('Do you want to delete this')) {
      this.request.deleteData(environment.blogPost.get, id).subscribe(() => {
        this.getBlogPost();
      });
    }
  }


  getBlogPost() {
    this.request.getData<BlogPost[]>(environment.blogPost.get).subscribe(
      (item) => {
        this.dataSource = new MatTableDataSource(item);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (e) => {
        alert('Error');
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
