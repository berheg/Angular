import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {ProductModelServer} from "../../models/product.model";
import {map} from "rxjs/operators";
import {CartService} from "../../services/cart.service";

declare let $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements AfterViewInit, OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
