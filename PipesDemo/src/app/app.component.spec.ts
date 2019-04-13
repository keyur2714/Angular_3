import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { WelcomePipe } from './welcome.pipe';
import { StatusConvertPipe } from './status-convert.pipe';
import { LoopPipe } from './loop.pipe';
import { TestService } from './test-service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        WelcomePipe,
        StatusConvertPipe,
        LoopPipe
      ],
      providers:[
        TestService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PipesDemo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('PipesDemo');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('PipesDemo');
  });
  it('should have name = keyur', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.name).toEqual("denish");
  });  
  it('sum(n1,n2):number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    let result = app.sum(10,10);
    expect(result).toEqual(20);
  });
  it('Test Service Method: sayHello', () => {    
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    let msg:string = app.sayHello();
    expect(msg).toEqual("Hello...!");
  });

  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });
});
