import { Component, OnInit,Input } from '@angular/core';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent implements OnInit {
  @Input() error!: string;

  errorIcon = faExclamation;

  constructor() {}

  ngOnInit(): void {}

}
