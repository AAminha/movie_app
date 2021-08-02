import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {      // 유저를 데려와서 홈으로 리다이렉트
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return <span>{ location.state.title }</span>;
        } else {
            return null;
        }
    }
}

// props를 출력해보면 history가 존재함. 여러가지가 있는데 그것들은 url을 변경하는 역할.
// 즉 웹사이트가 어디있는지 장소를 바꿀 수 있다는 것.


export default Detail;