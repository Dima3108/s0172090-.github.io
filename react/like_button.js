'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
        
           // return 'You liked this.';
           return e('h3',null,'Text');
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}
const domContainer = document.querySelector('#like_button_container');
//const root=ReactDOM.createRoot(domContainer);
ReactDOM.render(e(LikeButton), domContainer);
