import { useDrop } from 'react-dnd';

export const Bin = ({text}) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: "box",
        drop: () => ({ name: text ? text : "Geen text hexagon" }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));
    const isActive = canDrop && isOver;
    let backgroundColor = '#222';
    if (isActive) {
        backgroundColor = 'darkgreen';
    }
    else if (canDrop) {
        backgroundColor = 'darkkhaki';
    }
    return (
        <div ref={drop} role={'Dustbin'} className="hex" style={{backgroundColor}}>
            <div className="hex__inner">
                {text}
            </div>
        </div>)
};
