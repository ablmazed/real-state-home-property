import ContactForm from './ContactForm'

export default function HomeContactForm() {
  return (
    <section>
      <div className="px-10 py-20 grid grid-cols-1 md:grid-cols-2">
        <div className=" flex items-center  ">
          <div>
            <h2 className="text-3xl py-5">Talk to a Redfin agent</h2>
            <p>
              Youll be connected with an expert local agent—theres no pressure
              or obligation.
            </p>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
