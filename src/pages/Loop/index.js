import React, { Component } from 'react';
import {connect} from "react-redux";
import Configurator from 'components/Configurator'
import LoopItem from 'components/Watch/Loop'
import { getItems } from 'constants/Items'
import Pipe from 'components/Pipe'
import Page from 'components/Page'

class Loop extends Component {
    render() {
        let items = getItems(this.props.watchmodel);

        return (
            <Page color="#cc99ff" background="#280051">
                <div className={'two-columns'}>
                    <Configurator />
                    <div className={'bar-page'}>
                        <Pipe>
                            { items['loops'].map((code, index) =>
                                <LoopItem className={'pipe-element wow flipInY'} key={index} code={ code } history={ this.props.history } />
                            ) }
                        </Pipe>
                    </div>
                </div>
            </Page>
        );
    }
}

export default connect(
    state => ({
        watchmodel: state.watchmodel,
    }),
    dispatch => ({}),
    null,
    { pure: false }
) (Loop);
