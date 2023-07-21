import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-collect-name-dialog',
  templateUrl: './collect-name-dialog.component.html',
  styleUrls: ['./collect-name-dialog.component.scss']
})
export class CollectNameDialogComponent {
  public fileNameForm: FormGroup;

  @Output() onFileSubmit = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {
    this.fileNameForm = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  public onSubmit(): void {
    this.fileNameForm.markAllAsTouched();

    if (this.fileNameForm.valid) {
      this.onFileSubmit.emit(this.fileNameForm.value.name);
    }
  }

}
