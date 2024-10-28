import PriceOption from "../../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 25,
            "features": [
                "Access to gym equipment",
                "Locker included",
                "1 group class per week",
                "1 personal training session per month"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 45,
            "features": [
                "Access to gym equipment",
                "Locker included",
                "Unlimited group classes",
                "2 personal training sessions per month",
                "Free gym merchandise"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 70,
            "features": [
                "24/7 gym access",
                "Locker and towel service included",
                "Unlimited group classes",
                "4 personal training sessions per month",
                "Free gym merchandise",
                "Access to sauna and steam room"
            ]
        },
        {
            "id": 4,
            "name": "Elite Membership",
            "price": 100,
            "features": [
                "24/7 gym access",
                "Locker, towel, and laundry service included",
                "Unlimited group classes",
                "8 personal training sessions per month",
                "Free gym merchandise and supplements",
                "Access to sauna, steam room, and pool",
                "Diet and fitness plan customized monthly"
            ]
        }
    ]

    return (
        <div className=" w-11/12 mx-auto space-y-5 mt-5">
            <h2 className="text-4xl">Best Prices In the Town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;