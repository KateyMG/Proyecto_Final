import React from "react";
import ReactDOM from "react-dom";
import { Graphviz } from 'graphviz-react';

//JSX
ReactDOM.render(<Graphviz dot={`digraph so
{
Day [shape = record];
event [shape = record];
events [shape = record];
name [shape = record];
names [shape = record];
Array[color = white];
Day -> event;
event -> name;
Day -> events;
events -> names;
event [fontsize=13,  label ="Event[0]"];
events [fontsize=13,  label ="Event[1]"];
name [fontsize=13,  label ="Name| Type | Time "];
names [fontsize=13,  label ="Name| Type | Time "];

node [shape = record];
node0 [fontsize=13,  label ="Day[0]|Day[1]| Day[2]| Day[3]| Day[4]"];




 }`}/>,

    document.getElementById("root"));
