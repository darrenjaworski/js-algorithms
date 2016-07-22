// We saw in CC(Algorithm4.3onpage544) that computing connected components in
// undirected graphs is a simple application of depth-first search.
// How can we efficiently compute strong components in digraphs?
// Remarkably, the implementation KosarajuSCC on the facing page does the job with
// just a few lines of code added to CC, as follows:
// ■ Given a digraph G, use DepthFirstOrder to compute the reverse postorder of its reverse, G R.
// ■ Run standard DFS on G, but consider the unmarked vertices in the order just computed instead of the standard numerical order.
// ■ All vertices reached on a call to the recursive dfs() from the constructor are in a strong component (!), so identify them as in CC.
