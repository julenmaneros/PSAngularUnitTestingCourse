import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";

describe('HeroComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroComponent>;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent]
        });
        fixture = TestBed.createComponent(HeroComponent);
    });
});