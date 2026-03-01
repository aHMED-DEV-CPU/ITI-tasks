class CountriesAPI {

    async getCountries() {

        console.log("fetching from a server ");

        return [
            "egypt",
            "india",
            "brazil",
            "iran"
        ];

    }

}


class CountriesProxy {

    constructor() {

        this.api = new CountriesAPI();

        this.cache = null;

    }

    async getCountries() {

        if (this.cache) {

            console.log("Returning countries from cache...");

            return this.cache;

        }


        const countries = await this.api.getCountries();


        this.cache = countries;

        return countries;

    }

}


async function main() {

    const proxy = new CountriesProxy();


    const countries1 = await proxy.getCountries();

    console.log(countries1);

    console.log("=====================");


    const countries2 = await proxy.getCountries();

    console.log(countries2);

}

main();