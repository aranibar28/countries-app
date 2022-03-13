# CountriesApp

## Estructura de directorios

    ng g m shared
        ng g c shared/sidebar -is --skip-tests
        ng g c shared/menu -is --skip-tests
        ng g c shared/footer -is --skip-tests

    ng g m countries
        ng g c countries/pages/byCapital -is --skip-tests
        ng g c countries/pages/byCountry -is --skip-tests
        ng g c countries/pages/byRegion -is --skip-tests
        ng g c countries/pages/viewCountry -is --skip-tests

        ng g c countries/components
        ng g c countries/interfaces
        ng g c countries/services
    