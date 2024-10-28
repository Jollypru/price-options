import PropTypes from "prop-types";
import Feature from "../Features/Feature";

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-blue-500 p-10 rounded-lg text-white text-center flex flex-col">
            <h2>
                <span className="text-5xl">${price}</span>
                <span className="text-3xl">/mon</span>
            </h2>
            <h4 className="text-5xl mb-5">{name}</h4>
            <div className="p-6 flex-grow">
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }

            </div>
            <button className="p-2 w-full bg-lime-500 mt-10 text-xl font-bold rounded-lg hover:bg-green-900">Buy Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;