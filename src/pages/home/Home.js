import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


import Card from 'components/card/Card';
import Loading from 'components/loading/Loading';
import {
    getAllPokemon,
    getMorePokemon,
} from 'store/actions/pokemonAction';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
        pokemonData: [],
        photos: [],
        page: 0,
        start: false
        }
        props.getPokemon();
    }

    componentDidMount() {
        var options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
        };
        
        this.observer = new IntersectionObserver(
        this.handleObserver.bind(this),
        options
        );
        this.observer.observe(this.loadingRef);
    }

    componentDidUpdate(prevProps) {

        const { pokemonData, page } = this.state;
        const {
            isSuccessGet,
            isSuccessGetMore,
            data,
            moreData,
        } = this.props;

        if (isSuccessGet !== prevProps.isSuccessGet && isSuccessGet) {
            this.setState({ pokemonData: data, page: page + 1 })
        }
        if (isSuccessGetMore !== prevProps.isSuccessGetMore && isSuccessGetMore) {
            for (const result of [...moreData.results]) {
                pokemonData.results.push( result )
            }
            this.setState({ 
                pokemonData: {
                    'count': pokemonData.count,
                    'next': moreData.next,
                    'previous': moreData.previous,
                    'results': pokemonData.results,
                }, 
                start: false
            })
        }
    }

    handleObserver(entities, observer) {
        const { pokemonData, page, start } = this.state;
        const { morePokemon } = this.props;
        if (!start && this.state.pokemonData.next && this.state.pokemonData.next) {
            this.setState({ page: page + 1, start: true });
            page > 0 && morePokemon(pokemonData.next && pokemonData.next);
        }
    }

    render(){
        const {
            data,
            isSuccessGet,
            isErrorGet,
        } = this.props;

        const { start } = this.state;

        return(
            <Style>
                { isSuccessGet && !isErrorGet 
                ? 
                <div>
                    <Card pokemonData={data} />
                </div>
                :
                <div className="load" >
                    <Loading height="140px" />
                </div>
                }
                <div ref={loadingRef => (this.loadingRef = loadingRef)} >
                    { start &&
                        <Loading height="40px" />
                    } 
                </div>
            </Style>
        )
    }
}

const Style = styled.div`
    width:100%;
    text-align: center;

    .load {
        min-height: calc(100vh);
        background: white;
        z-index: 100;
        justify-content: center;
        align-items: center;
        display: flex;
    }
`;

const mapStateToProps = (state) => ({
    data: state.pokemonReducer.getAll.data,
    isLoadingGet: state.pokemonReducer.getAll.isLoading,
    isSuccessGet: state.pokemonReducer.getAll.isSuccess,
    isErrorGet: state.pokemonReducer.getAll.isError,

    moreData: state.pokemonReducer.getMore.data,
    isLoadingGetMore: state.pokemonReducer.getMore.isLoading,
    isSuccessGetMore: state.pokemonReducer.getMore.isSuccess,
    isErrorGetMore: state.pokemonReducer.getMore.isError,
})

const mapDispatchToProps = (dispatch) => ({
    getPokemon: () => dispatch(getAllPokemon()),
    morePokemon: (url) => dispatch(getMorePokemon(url))
})


export default connect( mapStateToProps, mapDispatchToProps )(Home);