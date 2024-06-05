import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from '../app.component';

describe('AppComponent', () => {
   let fixture: ComponentFixture<AppComponent>;

   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [AppComponent]
      });

      fixture = TestBed.createComponent(AppComponent);
   });

   it('should show the title', () => {
      const compiledComponent = fixture.debugElement.nativeElement;
      expect(compiledComponent.
         querySelector('h1').textContent).toContain('actions');
   });
});