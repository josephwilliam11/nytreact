import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Title from "../../components/Title";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import {  SearchForm, ResultList } from "../../components/Form";

class Articles extends Component {
    state = {
        search: "",
        results: [],
        title: "",
        number: 1,
        startDate: "",
        endDate: "",
        url: ""
    };

    componenetDidMount() {
        this.loadArticles();
    }

    // this.setState({ results: res.data.response.docs })
    loadArticles = query => {
        API.search(query)
            .then(res => {
                this.setState({ results: res.data.response.docs })
            }) 
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log('joe');
        this.loadArticles(this.state.search)
    
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Title>
                            <h1>NYT Article Search</h1>
                        </Title>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <div>
                            <SearchForm
                                search={this.state.search}
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </div>
                        {/* <form>
                            <Input
                                value={this.state.number}
                                onChange={this.handleInputChange}
                                name="number"
                                placeholder="Number of recods to Retreive"
                            />
                        </form>
                        <form>
                            <Input
                                value={this.state.startDate}
                                onChange={this.handleInputChange}
                                name="startDate"
                                placeholder="Start Date (optional)"
                            />
                        </form>
                        <form>
                            <Input
                                value={this.state.endDate}
                                onChange={this.handleInputChange}
                                name="endDate"
                                placeholder="End Date (optional)"
                            />
                        </form> */}
                    </Col>
                    <Col size="md-6 sm-12">          
                        <ResultList results={this.state.results} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Articles;