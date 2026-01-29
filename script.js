const cities = [
    "Sydney",
    "Rio de Janeiro",
    "São Paulo",
    "Los Angeles",
    "Nova Iorque",
    "São Francisco",
    "Londres",
    "Atlanta",
    "Paris",
    "Toronto",
    "Seattle"
  ];

  const ul = document.getElementById('cities-list');

  ul.innerHTML = cities.map((items) => `<li>${items}</li>`).join('');