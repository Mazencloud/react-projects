import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import { mobile } from '../responsive'

const Container = styled.div``
const Title = styled.h1`
    margin:20px;
`
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
    
`
const Filter = styled.div`
    margin:20px;
    ${mobile({
        margin: "0px 20px",
        display: "flex",
        flexDirection: "column"
    })}
`
const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
    ${mobile({
        marginRight: "0px"
    })}
`
const Select = styled.select`
    Padding:10px;
    margin-right:20px;
    ${mobile({
        margin: "10px 0px"
    })}
`
const Option = styled.option``

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option selected disabled>Color</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>White</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option selected disabled>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (lowest to highest)</Option>
                        <Option>Price (highest to lowest)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductList