import { useState } from "react";
import FontAwesome from "react-fontawesome";

export const Dropdown = () => {
    headerTitles = ['Completed', 'In Progress', 'Not Started']
    
    toggleList = () => {
        //Toggle isListOpen and show/hide list items
        this.setS
    }
    // And here we have the JSX for our component. It's pretty straightforward
    return (
        <div className="dd-wrapper">
            <button
            type="button"
            className="dd-header"
            onClick={toggleList}>
                <div className="dd-header-title">{headerTitle}</div>
                {isListOpen
                ? <FontAwesome name="angle-up" size="2x"/>
                : <FontAwesome name="angle-down" size="2x"/>}
            </button>
            {isListOpen && (
                <div
                    role="list"
                    className="dd-list">
                        {list.map((item) => (
                            <button
                                type="button"
                                className="dd-list-item"
                                key={item.id}
                                onClick={() => this.selectItem(item)}
                                >
                                    {item.title}
                                    {' '}
                                    {item.selected && <FontAwesome name="ellipsis-v"/>}

                                
                            </button>
                        ))}

                </div>
            )}
            
        </div>
    )
            
}