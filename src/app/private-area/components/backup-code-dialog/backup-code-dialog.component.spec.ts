import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupCodeDialogComponent } from './backup-code-dialog.component';

describe('BackupCodeDialogComponent', () => {
  let component: BackupCodeDialogComponent;
  let fixture: ComponentFixture<BackupCodeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupCodeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupCodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
