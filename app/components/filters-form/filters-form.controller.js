function FiltersFormController($injector) {
    this.nationalityConst = $injector.get('nationalityConst');
    this.gender = 'all';

    this.submit = () => {
        this.filtersApply({filters: {gender: this.gender, nat: this.nat}});
    };
}