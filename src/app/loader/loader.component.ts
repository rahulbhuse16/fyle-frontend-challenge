import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent implements OnInit {
  @Input() text!: string;

  constructor() {}

  ngOnInit(): void {}
}
