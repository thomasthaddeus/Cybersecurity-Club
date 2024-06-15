"""visualization.py
_summary_

_extended_summary_
"""

import json
import plotly.graph_objects as go

# Load the configuration file
with open('config.json', 'r', encoding='utf-8') as f:
    config = json.load(f)

# Define the nodes and their properties
nodes = [
    {"id": "Home", "label": "Home", "status": "Built"},
    {"id": "AboutUs", "label": "About Us", "status": "Built"},
    {"id": "Events", "label": "Events", "status": "Built"},
    {"id": "Resources", "label": "Resources", "status": "Built"},
    {"id": "JoinUs", "label": "Join Us", "status": "Built"},
    {"id": "Contact", "label": "Contact", "status": "Built"},
    {"id": "Sidebar", "label": "Sidebar", "status": "Built"},
    {"id": "Footer", "label": "Footer", "status": "Built"},
    {"id": "Future1", "label": "Future Component 1", "status": "Future Work"},
    {"id": "Future2", "label": "Future Component 2", "status": "In Progress"}
]

# Define the edges between the nodes
edges = [
    {"from": "Sidebar", "to": "Home"},
    {"from": "Sidebar", "to": "AboutUs"},
    {"from": "Sidebar", "to": "Events"},
    {"from": "Sidebar", "to": "Resources"},
    {"from": "Sidebar", "to": "JoinUs"},
    {"from": "Sidebar", "to": "Contact"},
    {"from": "Footer", "to": "Home"},
    {"from": "Footer", "to": "AboutUs"},
    {"from": "Footer", "to": "Events"},
    {"from": "Footer", "to": "Resources"},
    {"from": "Footer", "to": "JoinUs"},
    {"from": "Footer", "to": "Contact"},
    {"from": "Home", "to": "Future1"},
    {"from": "AboutUs", "to": "Future2"}
]

# Extract the node properties
node_labels = [node["label"] for node in nodes]
node_colors = [config["nodeConfig"]["colors"][node["status"]] for node in nodes]
node_ids = [node["id"] for node in nodes]

# Create the figure
fig = go.Figure()

# Add the nodes
fig.add_trace(go.Scatter(
    x=[0] * len(nodes),
    y=list(range(len(nodes))),
    text=node_labels,
    mode="markers+text",
    marker=dict(color=node_colors, size=config["nodeConfig"]["size"]),
    textposition=config["nodeConfig"]["textposition"],
    hoverinfo=config["nodeConfig"]["hoverinfo"],
    textfont=config["nodeConfig"]["font"]
))

# Add the edges
for edge in edges:
    from_index = node_ids.index(edge["from"])
    to_index = node_ids.index(edge["to"])
    fig.add_trace(go.Scatter(
        x=[0, 0],
        y=[from_index, to_index],
        mode="lines",
        line=dict(width=config["lineConfig"]["width"], color=config["lineConfig"]["color"]),
        hoverinfo=config["lineConfig"]["hoverinfo"]
    ))

# Set layout properties from the config file
fig.update_layout(
    title=config["plotConfig"]["title"],
    xaxis=config["plotConfig"]["xaxis"],
    yaxis=config["plotConfig"]["yaxis"],
    plot_bgcolor=config["plotConfig"]["plot_bgcolor"],
    margin=config["plotConfig"]["margin"]
)

# Display the figure
fig.show()
