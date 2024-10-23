import SingleProperty from "./SingleProperty";

export default function Property() {
    const data = [
        {
            heading: "Modern Exotic Villa",
            price: "9500.00",
            qty1: 5,
            room1: "Bedrooms",
            qty2: 4,
            room2: "Bathrooms",
            image: "https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?t=st=1729678105~exp=1729681705~hmac=b347645bc68aceea853b85047a2f4f075b702a6d68ef7ec4d61cbedd315d234c&w=996",
        },
        {
            heading: "Modern Design Villa",
            price: "8500.00",
            qty1: 5,
            room1: "Bedrooms",
            qty2: 4,
            room2: "Bathrooms",
            image: "https://img.freepik.com/free-photo/modern-luxury-bedroom-suite-bathroom-with-working-table_105762-1788.jpg?t=st=1729678718~exp=1729682318~hmac=884f080a5bccc61e6a47955fd830cfb0b9090a594b743713151af84b18ff1b89&w=1060",
        },
        {
            heading: "Modern Design Villa",
            price: "5478.00",
            qty1: 5,
            room1: "Bedrooms",
            qty2: 4,
            room2: "Bathrooms",
            image: "https://img.freepik.com/free-photo/modern-luxury-bedroom-suite-bathroom_105762-1791.jpg?t=st=1729678111~exp=1729681711~hmac=ccc0a2bb1ba84023eac9cf697e5b18768146e9fcd0d9f8f9f5713b90d5dc683e&w=1060",
        },
        {
            heading: "Modern Exotic Villa",
            price: "10000.00",
            qty1: 5,
            room1: "Bedrooms",
            qty2: 4,
            room2: "Bathrooms",
            image: "https://img.freepik.com/free-photo/modern-bedroom-with-large-bed-wooden-wall-natural-light_9975-33036.jpg?t=st=1729678734~exp=1729682334~hmac=335f3beb49e6d36ffc3003e5d324f84ca6ddf7be3fde76b991c5a3cb2b0ebcae&w=1380",
        },
        {
            heading: "Modern Design Villa",
            price: "2500.00",
            qty1: 5,
            room1: "Bedrooms",
            qty2: 4,
            room2: "Bathrooms",
            image: "https://img.freepik.com/free-photo/comfortable-modern-bedroom-with-elegant-decoration-lighting-generative-ai_188544-7715.jpg?t=st=1729678740~exp=1729682340~hmac=3e938a2f8c756a96eb61d8c1420da8098c579bd2afa9ae9fbbff4f9eae9c1c78&w=1380",
        },
    ];

    return (
        <div>
            <div class="container">
                <div class="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                    <span class="mb-2 block text-lg font-semibold text-primary">
                        Properties
                    </span>
                    <h2 class="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                        Grab your Dream Property
                    </h2>
                    <p class="text-base text-body-color dark:text-dark-6">
                        There are many variations of passages of Lorem Ipsum available
                        but the majority have suffered alteration in some form.
                    </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((obj, i) => (
                        <SingleProperty
                            key={i}
                            heading={obj.heading}
                            price={obj.price}
                            qty1={obj.qty1}
                            room1={obj.room1}
                            qty2={obj.qty2}
                            room2={obj.room2}
                            image={obj.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}



