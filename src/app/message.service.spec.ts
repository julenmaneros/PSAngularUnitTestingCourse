import { MessageService } from "./message.service"

describe('MessageService', () => {
    let service: MessageService;

    beforeEach(() => {
    })

    it('should have no messages to start', () => {
        service = new MessageService();

        expect(service.messages.length).toBe(0);
    })

    it('should add a messages when add is called', () => {
        service = new MessageService();

        service.add('message1'); 

        expect(service.messages.length).toBe(1);
    })

    it('should remove all messages when clear is called', () => {
        service = new MessageService();
        service.add('message1'); // is not part of the act, but the arrange, needed to change the initial state

        service.clear();

        expect(service.messages.length).toBe(0);
    })
})