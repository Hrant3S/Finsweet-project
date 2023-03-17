import { environment } from 'src/environments/environments';
import {  Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiistAuthors } from 'src/app/component/list-of-authors/list-of-authors.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequestService } from 'src/app/service/service/request.service';

@Component({
  selector: 'app-authors-n',
  templateUrl: './authors-n.component.html',
  styleUrls: ['./authors-n.component.css'],
})
export class AuthorsNComponent implements OnInit {

  btnclik: string = '';
  forms: boolean = false;
  id: number = 0;
  displayedColumns: string[] = [
    'id',
    'img',
    'title',
    'text',
    'face',
    'twitt',
    'insta',
    'linke',
    'Action',
  ];
  form: FormGroup = new FormGroup({});

  dataSource!: MatTableDataSource<LiistAuthors>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private request: RequestService, public fm: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fm.group({
      id: [''],
      img: [''],
      title: [''],
      text: [''],
      face: [''],
      twitt: [''],
      insta: [''],
      linke: [''],
    });
    this.getLiistAuthors();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  add() {
    this.forms = !this.forms;
    this.btnclik = 'Add';
  }

  submit() {
    if (this.btnclik == 'Add') {
      let item: LiistAuthors = {
        id: this.form.get('id')?.value,
        img: this.form.get('img')?.value,
        title: this.form.get('title')?.value,
        text: this.form.get('text')?.value,
        face: this.form.get('face')?.value,
        twitt: this.form.get('twitt')?.value,
        insta: this.form.get('insta')?.value,
        linke: this.form.get('linke')?.value,
      };
      if (confirm('Do your really want to add new Autors')) {
        this.request
          .postData<LiistAuthors>(environment.listAuthors.get, item)
          .subscribe(() => {
            this.getLiistAuthors();
            this.forms = !this.forms;
          });
      }
    } else if (this.btnclik == 'edit') {
      console.log('hello words');

      if (confirm('Do you really want to confirm the change?')) {
        this.request.putData<LiistAuthors>(`${environment.listAuthors.get}/${this.id}`, this.form.value)
          .subscribe(() => {
            this.getLiistAuthors();
            this.forms = !this.forms;
          });
      }
    }
  }


  addit(row: LiistAuthors) {
    this.forms = !this.forms;
    this.btnclik = 'edit';
    this.form.patchValue({
      img: row.img,
      text: row.text,
      title: row.title,
      face: row.face,
      twitt: row.twitt,
      insta: row.insta,
      linke: row.linke,
    });
    this.id = row.id;
  }

  delate(id: number) {
    if (confirm('Do you want to delete this')) {
      this.request.deleteData(environment.listAuthors.get, id).subscribe(() => {
        this.getLiistAuthors();
      });
    }
  }

  getLiistAuthors() {
    this.request.getData<LiistAuthors[]>(environment.listAuthors.get).subscribe(
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
  close() {
    this.forms = !this.forms;
  }

}
