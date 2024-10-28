import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-10 hover:bg-blue-200 hover:px-3 hover:rounded-md">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};
Link.propTypes = {
    route: PropTypes.object
}
export default Link;