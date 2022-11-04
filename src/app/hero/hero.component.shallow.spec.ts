import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";

describe('HeroComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA] // Says to Angular not to try to validate the schema/template using
        });
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };
        // fixture.detectChanges(); Not really needed, just to illustrate console errors and NO_ERROR_SCHEMA
        expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
    });

    it('should render the hero name in an anchor tag', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };
        // this test fails, because the string it's empaty because Angular has not implement the bindings, {{her.name}} among others
        // need to change detection to execute to implement those bindings a set values
        fixture.detectChanges();
        
        // nativeElement exposes a DOM object, a regular browser DOM API 
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
    });
});