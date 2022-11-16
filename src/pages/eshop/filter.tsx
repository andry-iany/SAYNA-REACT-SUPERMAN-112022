type FilterOption = {
  description: string;
  count: number;
};

type Filter = {
  title: string;
  options: FilterOption[];
};

const filters: Filter[] = [
  {
    title: "catégorie",
    options: [
      {
        description: "Bestsellers",
        count: 123,
      },
      {
        description: "Goodies",
        count: 123,
      },
      {
        description: "Vêtements",
        count: 123,
      },
      {
        description: "Affiches/posters",
        count: 123,
      },
      {
        description: "Comics",
        count: 123,
      },
      {
        description: "Multimedia",
        count: 123,
      },
      {
        description: "Equipement",
        count: 123,
      },
      {
        description: "Bijoux",
        count: 123,
      },
      {
        description: "Vehicule",
        count: 123,
      },
    ],
  },
  {
    title: "Couleur",
    options: [
      {
        description: "Bestsellers",
        count: 123,
      },
      {
        description: "Goodies",
        count: 123,
      },
      {
        description: "Vêtements",
        count: 123,
      },
    ],
  },
  {
    title: "Univers",
    options: [
      {
        description: "Bestsellers",
        count: 123,
      },
      {
        description: "Goodies",
        count: 123,
      },
      {
        description: "Vêtements",
        count: 123,
      },
      {
        description: "Affiches/posters",
        count: 123,
      },
      {
        description: "Comics",
        count: 123,
      },
      {
        description: "Multimedia",
        count: 123,
      },
      {
        description: "Equipement",
        count: 123,
      },
      {
        description: "Bijoux",
        count: 123,
      },
      {
        description: "Vehicule",
        count: 123,
      },
    ],
  },
];

const Filter = () => {
  const renderFilters = filters.map((filter) => {
    return (
      <div className="accordion-item mb-4" key={filter.title}>
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed px-0 text-capitalize"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#accordion-" + filter.title}
          >
            {filter.title}
          </button>
        </h2>

        <div
          id={"accordion-" + filter.title}
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            <div className="d-flex flex-column">
              {filter.options.map((option) => {
                return (
                  <div
                    className="form-check d-flex gap-3 align-items-baseline mb-3"
                    key={option.description}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label w-100 text-capitalize"
                      htmlFor="flexCheckDefault"
                    >
                      {option.description}
                    </label>
                    <small>{option.count}</small>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section id="filter" className="text-white">
      <h2 className="mb-5">Filtres</h2>

      <form action="" className="mb-5">
        <div className="mb-4">
          <label htmlFor="prix" className="form-label mb-4">
            Prix
          </label>
          <input type="range" className="form-range" id="prix" />
          <div className="d-flex justify-content-between">
            <small>0€</small>
            <small>100</small>
            <small>200€</small>
          </div>
        </div>

        <div className="accordion accordion-flush" id="accordion">
          {renderFilters}
        </div>
      </form>
    </section>
  );
};

export default Filter;
