#include <iostream>
#include <queue>//FIFO
#include <climits>

using namespace std;

template<class VertexType>
class Graph
{
    int numVertices;               // Current number of vertices
    VertexType vertices[50];       // Store vertices
    int edges[50][50];             // Adjacency matrix
    bool marks[50];                // Visited array  [ 0   , 1    ,  0 ]

public:
    Graph()
    {
        numVertices = 0;

        // (no edges)  prevent garbage values
        for (int i = 0; i < 50; i++)
            for (int j = 0; j < 50; j++)
                edges[i][j] = 0;
    }

  

    void MakeEmpty()
    {
        numVertices = 0;
    }

    bool IsEmpty()
    {
        return numVertices == 0;
    }

    bool IsFull()
    {
        return numVertices == 50;
    }

    

    void AddVertex(const VertexType& vertex)
    {
        if (IsFull()) return;
        // add the vertex
        vertices[numVertices] = vertex;

        // Initialize row and column
        for (int i = 0; i <= numVertices; i++)
        {
            // make the edges = 0  to new entry 
            edges[numVertices][i] = 0;
            edges[i][numVertices] = 0;
        }

        numVertices++;
    }

    int GetIndex(const VertexType& vertex)
    {
        for (int i = 0; i < numVertices; i++)
            if (vertices[i] == vertex)
                return i;

        return -1; // Not found
    }

    /*  EDGE FUNCTIONS */

    void AddEdge(VertexType fromVertex, VertexType toVertex, int weight)
    {
        int from = GetIndex(fromVertex);
        int to = GetIndex(toVertex);

        if (from != -1 && to != -1) // both exist 
            edges[from][to] = weight;   // Directed graph
    }

    int GetPathWeight(VertexType fromVertex, VertexType toVertex)
    {
        int from = GetIndex(fromVertex);
        int to = GetIndex(toVertex);

        if (from != -1 && to != -1)// both exist 

            return edges[from][to];

        return 0;
    }
    // find next edge 
    void GetAdjVertices(VertexType vertex, queue<VertexType>& VertexQ)
    {
        int from = GetIndex(vertex);

        for (int i = 0; i < numVertices; i++)
        {
            if (edges[from][i] != 0)
                VertexQ.push(vertices[i]); // use in the search
        }
    }

    ///MARK FUNCTIONS   number of vertices that i visited 

    void ClearMarks()
    {
        for (int i = 0; i < numVertices; i++)
            marks[i] = false;
    }

    void MarkVertex(VertexType vertex)
    {
        int index = GetIndex(vertex);
        if (index != -1) // exist 
            marks[index] = true;
    }

    bool IsMarked(VertexType vertex)
    {
        int index = GetIndex(vertex);
        return marks[index];
    }

   //BFS

    void BreadthFirstSearch(const VertexType& startVertex,
        const VertexType& endVertex)
    {
        queue<VertexType> Q;  // for bfs 
        queue<VertexType> adjQ; // neighbors temp

        ClearMarks();

        Q.push(startVertex);
        MarkVertex(startVertex);

        while (!Q.empty())
        {
            VertexType current = Q.front();
            Q.pop();

            cout << current << " ";
            // when we get the     to     vertex 
            if (current == endVertex)
            {
                cout << "\n Found! \n";
                return;
            }

            GetAdjVertices(current, adjQ);

            while (!adjQ.empty())
            {
                VertexType adj = adjQ.front();
                adjQ.pop();

                if (!IsMarked(adj))
                {
                    MarkVertex(adj);
                    Q.push(adj);
                }
            }
        }

        cout << "\nNot Found\n";
    }

    ///DIJKSTRA

    void Dijkstra(const VertexType& startVertex)
    {
        int start = GetIndex(startVertex);

        int dist[50]; // shortest 
        bool visited[50]; // follow all that i visted 

        // Initialization
        for (int i = 0; i < numVertices; i++)
        {
            dist[i] = INT_MAX;
            visited[i] = false;
        }

        dist[start] = 0;

        // Main loop
        for (int count = 0; count < numVertices - 1; count++)
        {
            int u = MinDistance(dist, visited);
            visited[u] = true;

            for (int v = 0; v < numVertices; v++)
            {
                if (!visited[v] && edges[u][v] != 0 &&
                    dist[u] != INT_MAX &&
                    dist[u] + edges[u][v] < dist[v]) // new address shorter than addess we have 
                {
                    dist[v] = dist[u] + edges[u][v];
                }
            }
        }

        // Print result
        cout << "\nDijkstra result from " << startVertex << ":\n";
        for (int i = 0; i < numVertices; i++)
        {
            cout << startVertex << " -> " << vertices[i]
                << " = " << dist[i] << endl;
        }
    }

private:
    int MinDistance(int dist[], bool visited[])
    {
        int min = INT_MAX;
        int minIndex = -1;

        for (int i = 0; i < numVertices; i++)
        {
            if (!visited[i] && dist[i] < min)
            {
                min = dist[i];
                minIndex = i;
            }
        }
        return minIndex;
    }
};



int main()
{
    Graph<char> g;

    g.AddVertex('A');
    g.AddVertex('B');
    g.AddVertex('C');
    g.AddVertex('D');

    g.AddEdge('A', 'B', 1);
    g.AddEdge('A', 'C', 4);
    g.AddEdge('B', 'C', 2);
    g.AddEdge('C', 'D', 1);

    g.BreadthFirstSearch('A', 'D');
    g.Dijkstra('A');
}
