import React, {Component} from 'react'

class Draggable extends Component {
    static defaultProps = {
        onDragStart:()=>{},
        onDrag:()=>{},
        onDragEnd:()=>{},
    };

    state = {
        isDragging: false,
        x: 0,
        y: 0,
    };

    ComponentDidUpdate = () => {
        if ((this.state.x && this.state.x === this.props.x) &&
            (this.state.y && this.state.y === this.props.y)) return;

        this.setState({
            ...this.state, ...{
                x: this.props.x,
                y: this.props.y,
            }
        })
    };

    startDragging = e => {
        e.preventDefault();
        this.dragStartCursorX = e.pageX;
        this.dragStartCursorY = e.pageY;
        this.dragStartComponentX = this.state.x;
        this.dragStartComponentY = this.state.y;
        this.setState({
            ...this.state, ...{
                isDragging: true
            }
        });
        document.addEventListener('mousemove', this.moveComponent);
        document.addEventListener('mouseup', this.finishDragging);
        this.props.onDragStart(e, this.state);
    };

    moveComponent = e => {
        if (!this.state.isDragging) return;
        const deltaX = e.pageX - this.dragStartCursorX;
        const deltaY = e.pageY - this.dragStartCursorY;
        this.setState({
            ...this.state, ...{
                x: this.dragStartComponentX + deltaX,
                y: this.dragStartComponentY + deltaY,
            }
        });
        e.preventDefault();
        this.props.onDrag(e, this.state);
    };

    finishDragging = e => {
        if (!this.state.isDragging) return;
        document.removeEventListener('mousemove', this.moveComponent);
        document.removeEventListener('mouseup', this.finishDragging);
        this.setState({
            ...this.state, ...{
                isDragging: false
            }
        });
        this.props.onDragEnd(e, this.state);
    };

    ComponentWillUnmount = () => {
        document.removeEventListener('mousemove', this.moveComponent);
        document.removeEventListener('mouseup', this.finishDragging);
    };

    render = () => React.cloneElement(this.props.children, {
        className: [this.props.children.props.className, "draggable", this.state.isDragging ? "dragging" : ""].join(" "),
        onMouseDown: this.startDragging,
        style: {
            transform: `translate3d(${this.state.x}px, ${this.state.y}px, 0)`
        }
    });
}

export default Draggable