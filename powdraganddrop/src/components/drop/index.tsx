import { useDrag } from 'react-dnd';

const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
};

export const Drop = function Drop({ name }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "box",
        item: { name },
        end: (item, monitor) => {
            const dropResult:any = monitor.getDropResult();
            if (item && dropResult) {
                alert(`You dropped ${item.name} into ${dropResult.name}!`);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));

    const opacity = isDragging ? 0.4 : 1;
    return (<div ref={drag} role="Box" style={{ ...style, opacity }} data-testid={`box-${name}`}>
        {name}
    </div>);
};