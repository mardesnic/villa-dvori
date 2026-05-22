const rules = [
  "Villa Dvori is only rented as a whole unit.",
  "Villa Dvori minimum stay is 7 nights.",
  "Villa Dvori is only rented from Saturdays to Saturdays.",
  "Villa Dvori is only rented for up to 12 persons, infants and children included.",
  "Reservation fee is 25% of the full renting price.",
  "Check in is after 16:00, check out before 10:00.",
];

export default function ContactSection() {
  return (
    <section id="contact" style={{ background: "#e4e4e4" }}>
      <div className="container py-5">
        <div className="row gy-4">
          <div className="col-md-5">
            <h2 className="mb-3">
              <span className="font-garamond d-block" style={{ fontStyle: "italic", fontSize: "1.1em" }}>
                feel free to
              </span>
              CONTACT US
            </h2>
            <p className="text-muted small mb-4">
              Send us your request and we will be happy to provide our best offer!
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="mailto:sanda.desnica@gmail.com" className="text-dark text-decoration-none">
                  e-mail: sanda.desnica@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+385914714378" className="text-dark text-decoration-none">
                  tel: +385 91 471 4378
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 offset-md-1">
            <p className="section-label mb-3">House Rules</p>
            <ol className="ps-3">
              {rules.map((rule, i) => (
                <li key={i} className="mb-2 small">
                  {rule}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
