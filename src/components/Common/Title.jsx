import { TitleStyled } from "./TitleStyled.styled";
// import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

export const Title = ({ title }) => {
    return <>
        <TitleStyled>{title}</TitleStyled>
    </>
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
}