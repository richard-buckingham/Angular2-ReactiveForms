import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Customer } from './customer';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent implements OnInit  {
    public customerForm: FormGroup;
    customer: Customer= new Customer();

    constructor(private formBuilder: FormBuilder){ }

    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm));
    }

    public ngOnInit(): void {
        this.customerForm = this.formBuilder.group({
            firstName: '',
            lastName: '',
            email: '',
            sendCatalog: true,
        });
    }

    public populateTestData(): void {
        this.customerForm.patchValue({
            firstName: "rich",
            lastName: "buck",
            email: "test@test.com"//,
           // sendCatalog: false
        })
    }
 }
