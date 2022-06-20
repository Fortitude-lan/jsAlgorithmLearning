/*
 * @Description: 
 * @Author: wanghexing
 * @Date: 2022-06-17 15:42:51
 * @LastEditors: wanghexing
 * @LastEditTime: 2022-06-20 17:41:22
 */
import React from 'react'
import { OmsSyntaxHighlight } from 'components'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
export default function BFS() {
    let s = '## 队列和广度优先搜索BFS\n' + '**遍历或找出最短路径,发生在树或图中**\n\n' +
        '## 1.题目描述: 墙与门\n\n' + '给定一个 m × n 的二维网格，网格中有以下三种可能的初始化值：\n\n' +
        '-1 表示墙或是障碍物,0 表示一扇门,INF 无限表示一个空的房间\n\n' +
        '然后，我们用 2^31 - 1 = 2147483647 代表 INF。你可以认为通往门的距离总是小于 2147483647 的。你要给每个空房间位上填上该房间到 最近门的距离，如果无法到达门，则填 INF 即可\n\n' +
        '示例1'
    let BFSTree = `function BFS(root, target) {
    if (!root) return -1
    let queue = [root] //所有等待处理的子节点
    let step = 0 // 距离根节点的步数
    // BFS
    while (queue.length > 0) {
        step++
        let size = queue.length
        for (let i = 0; i < size; i++) {
            let cur = queue.shift()
            if (cur === target) return step
            cur.left && queue.push(cur.left)
            cur.right && queue.push(cur.right)
        }
    }
    return -1
}`
    let exam1 = `输入：
[[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]

输出：
[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]

解释：
2D网络为：
INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF

答案为：
  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4

输入：
[[0]]
输出：
[[0]]

输入：
[[-1]]
输出：
[[-1]]

输入：
[[2147483647]]
输出：
[[2147483647]]
`
    let mind = '## 2.解题思路\n\n' + '先把所有门(0)入队列,只要队列不为空就广度优先搜索 搜索到INF入列 步数+1'

    let doorAndWall = `const doorWall = (rooms) => {
    let inf = 2147483647 //无限门
    let r = rooms.length, c = rooms[0].length //行列
    let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]] //方向
    let queue = []
    //所有门0入列
    for (let i = 0; i < r.length; i++) {
        for (let j = 0; j < c.length; j++) {
            if (rooms[i][j] == 0) queue.push([i, j])
        }
    }
    //遍历队列展开搜索
    while (queue.length > 0) {
        let cur = queue.shift()//当前门
        let x = cur[0], y = cur[1] //坐标
        let step = rooms[x][y] + 1 //初始化步数
        for (let i = 0; i < directions.length; i++) {
            let nx = x + directions[i][0]
            let ny = y + directions[i][1]
            if (nx >= 0 && nx < r && ny >= 0 && ny < c && romms[i][y] == inf) {//合法位置
                rooms[nx][ny] = step //记录步数
                queue.push([nx, ny]) //加入循环的队列中
            }
        }
    }
    return rooms
}
//测试
console.log(doorWall([[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]));
console.log(doorWall([[-1]]));
`
    return (
        <div>
            <ReactMarkdown children={s} />
            <OmsSyntaxHighlight children={exam1} />
            <ReactMarkdown children={mind} />
            <OmsSyntaxHighlight children={doorAndWall} />
        </div>
    )
}
