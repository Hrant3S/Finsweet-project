import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChooseName } from 'src/app/component/choose-catagory/choose-catagory.component';
import { RequestService } from 'src/app/service/service/request.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-category-n',
  templateUrl: './category-n.component.html',
  styleUrls: ['./category-n.component.css'],
})
export class CategoryNComponent implements OnInit {
  btnclik: string = '';
  forms: boolean = false;
  id: number = 0;
  displayedColumns: string[] = ['id', 'img', 'title', 'categorytext', 'Action'];
  form: FormGroup = new FormGroup({});

  dataSource!: MatTableDataSource<ChooseName>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private request: RequestService, public fm: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fm.group({
      id: [''],
      img: [''],
      title: [''],
      categorytext: [''],
    });
    this.getChooseName();
  }

  add() {
    this.forms = !this.forms;
    this.btnclik = 'Add';
  }

  submit() {
    if (this.btnclik == 'Add') {
      let self: ChooseName = {
        img: this.form.get('img')?.value,
        title: this.form.get('title')?.value,
        categorytext: this.form.get('categorytext')?.value,
        id: this.form.get('id')?.value,
      };
      if (confirm('Do your really want to add new Autors')) {
        this.request
          .postData<ChooseName>(environment.chooseName.get, self)
          .subscribe(() => {
            this.getChooseName();
            this.forms = !this.forms;
          });
      }
    } else if (this.btnclik == 'edit') {
      console.log('Please select');

      if (confirm('Do you really want to confirm the change?')) {
        this.request
          .putData<ChooseName>(
            `${environment.chooseName.get}/${this.id}`,
            this.form.value
          )
          .subscribe(() => {
            this.getChooseName();
            this.forms = !this.forms;
          });
      }
    }
  }

  addit(row: ChooseName) {
    this.forms = !this.forms;
    this.btnclik = 'edit';
    this.form.patchValue({
      img: row.img,
      title: row.title,
      categorytext: row.categorytext,
    });
    this.id = row.id;
  }

  delate(id: number) {
    if (confirm('Are you sure you want to delete this')) {
      this.request.deleteData(environment.chooseName.get, id).subscribe(() => {
        this.getChooseName();
      });
    }
  }
  // ngAfterViewInit(){

  // }

  getChooseName() {
    this.request.getData<ChooseName[]>(environment.chooseName.get).subscribe(
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
