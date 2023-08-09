import React, { useState } from "react";
import { DragDropContext, Draggable, DropResult, Droppable } from "react-beautiful-dnd";
import { v4 } from "uuid";

const itemsFromBackend = [
  { id: v4(), content: "First task" },
  { id: v4(), content: "Second task" },
  { id: v4(), content: "Third task" },
  { id: v4(), content: "Fourth task" },
  { id: v4(), content: "Fifth task" }
];

const columnsFromBackend = {
  [123456]: {
    name: "First Column",
    items: itemsFromBackend
  },
  [1234567]: {
    name: "Second Column",
    items: [
      {
        id: v4(),
        content: "First Parent Task",
        children: [
          {id: v4(),
          content: "First child item",

        }
        ]
      },
      {
        id: v4(),
        content: "Second Parent Task",
        children: []
      }
    ]
  }
};

const onDragEnd = (result: DropResult, columns: { [x: string]: any; }, setColumns: { (value: React.SetStateAction<{ [x: string]: { name: string; items: { id: string; content: string; }[]; }; }>): void; (arg0: any): void; }) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

function App() {
  const [columns, setColumns] = useState(columnsFromBackend);
  console.log(columns[123456])
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        <>
        <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
              key={123456}
            >
              <h2>{columns[123456].name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={"123456"} key={123456}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500
                        }}
                      >
                        {columns[123456].items.map((item, index) => {
                          return (
                            <div>
                              {item.content}
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
                                        ...provided.draggableProps.style
                                      }}
                                    >
                                      {item.content}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            </div>

                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
              key={1234567}
            >
              <h2>{columns[1234567].name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={"1234567"} key={1234567}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500
                        }}
                      >
                        {columns[1234567]?.items?.map((item, index) => {
                          return (
                            <div>
                              {item.content}
                              {item.children.map((child, index) => {
                                return (
                                  <Draggable
                                    key={child.id}
                                    draggableId={child.id}
                                    index={index}
                                  >
                                    {(provided, snapshot) => {
                                      return (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          style={{
                                            userSelect: "none",
                                            padding: 16,
                                            margin: "0 0 8px 0",
                                            minHeight: "50px",
                                            backgroundColor: snapshot.isDragging
                                              ? "#263B4A"
                                              : "#456C86",
                                            color: "white",
                                            ...provided.draggableProps.style
                                          }}
                                        >
                                          {child.content}
                                        </div>
                                      );
                                    }}
                                  </Draggable>
                                )
                              })}

                            </div>

                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
        </>

      </DragDropContext>
    </div>
  );
}

export default App;
