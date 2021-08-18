export default class AviaSalesSerive {

    __urlTickets = 'https://front-test.beta.aviasales.ru/tickets';
    __urlId = 'https://front-test.beta.aviasales.ru/search/';

    async getId() {
        const res = await fetch(`${this.__urlId}`);
        

        if (!res.ok) {
            throw new Error(`Can't fetch ${this.__urlId}, status: ${res.status}`)
        }

        return await res.json();
    }

    async getTickets(url) {
        console.log(url);
        const res = await fetch(`${this.__urlTickets}?searchId=${url}`);

        if (res.status === 500) {
            const res = await fetch(`${this.__urlTickets}?searchId=${url}`);
            return res.json();
        }

        return res.json();
    }

}