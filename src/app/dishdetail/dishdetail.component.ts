import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../service/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comment';
import 'rxjs/add/operator/switchmap';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {

  dish: Dish;
  dishId: number[];
  prev: number;
  next: number;
  commentForm: FormGroup;
  comment: Comment;

formErrors = {
'author': '',
'comment': '',
};

validationMessage = {
'author': {'required':'Name is required', 'minlength':'Name must be at least 2 letters long',
      'maxlength':'Name cannot be more than 25 letters'},
'comment': {'required': 'Comment is required', 'minlength': 'Comment must be at least 3 letters long',
      'maxlength': 'Comment cannot be more than 50 letters'}
};

  constructor(private dishservice: DishService, private route:ActivatedRoute, private location: Location, private cf: FormBuilder) {}

  ngOnInit() {
  this.createform();
  this.route.params.switchMap((params: Params) => this.dishservice.getDish(+params['id']))
  .subscribe(dish => {this.dish = dish; this.setPrevNext(dish.id)});
  this.dishservice.getDishid().subscribe(dishId => this.dishId = dishId);
  }

createform(){
this.commentForm = this.cf.group({
author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
rating: ['', Validators.required ],
comment: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
});

this.commentForm.valueChanges.
subscribe(data => this.onValueChanged(data));

this.onValueChanged();
}

onValueChanged(data?: any) {
if (!this.commentForm) { return; }
const form = this.commentForm;
for (const field in this.formErrors) {
this.formErrors[field] = '';
const control = form.get(field);
if (control && control.dirty && !control.valid) {
const messages = this.validationMessage[field];
for (const key in control.errors) {
this.formErrors[field] += messages[key] + ' ';
}
}
}
}

onSubmit(){
this.comment = this.commentForm.value;
this.comment.date = new Date().toISOString();
console.log(this.comment);
this.dish.comments.push(this.comment);
this.commentForm.reset({
      author: '',
      comment: '',
      rating: '',});
}

setPrevNext(dishnum: number){
let index = this.dishId.indexOf(dishnum);
this.prev = this.dishId[(this.dishId.length + index - 1)%this.dishId.length];
this.next = this.dishId[(this.dishId.length + index + 1)%this.dishId.length];
}

goBack(): void {
this.location.back();
}
}
