import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component"

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'SpiderDude', strength: 8 },
            { id: 2, name: 'Wonderful Woman', strength: 24 },
            { id: 3, name: 'SuperDude', strength: 55 }
        ];

        // Initialize the mock object with the name of the methods of the service we will need
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        // Angular is not playing part in this test, since we are initializing the component. And thus the ngOnInit() lifecycle method is not called
        component = new HeroesComponent(mockHeroService);
    });

    // This is a state based test, checking the state of the component has changed (the length of the array)
    describe('delete', () => {
        it('should remove the indicated hero from the heroes list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true)); // Tell Jasmine (using 'and' plus 'return Value') to return an simple observable (with 'of') for method deleteHero; otherwise the test fails since the delete() returns an observable
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(component.heroes.length).toBe(2);
        });
    });
})