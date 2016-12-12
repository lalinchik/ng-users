function FiltersFormController($injector) {
    this.nationalityConst = $injector.get('nationalityConst');
    this.gender = 'female';

    this.submit = () => {
        this.filtersApply({filters: {gender: this.gender, nat: this.nat}});
    };
}