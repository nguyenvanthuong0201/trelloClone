export const initialData = {
    boards: [
        {
            id:'board-1',
            columnOrder:['column-2','column-3','column-1'],
            columns:[
                {
                    id:'column-1',
                    boardsId:'board-1',
                    title:'To do',
                    CardOther:['card-1','card-2','card-3','card-4','card-5','card-6','card-7'],
                    cards:[
                        { id:'card-1',boardsId:'board-1',columnId:'column-1',title:'title of card 1',cover:'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/149351234_744141612897095_8519546040616884683_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=za10qHyP8KAAX8Kadjo&_nc_ht=scontent.fsgn2-1.fna&oh=4a3bb58d90696bc92ca926d9dfadb5ff&oe=617363A8'},
                        { id:'card-2',boardsId:'board-1',columnId:'column-1',title:'title of card 2',cover:null},
                        { id:'card-3',boardsId:'board-1',columnId:'column-1',title:'title of card 3',cover:null},
                        { id:'card-4',boardsId:'board-1',columnId:'column-1',title:'title of card 4',cover:null},
                        { id:'card-5',boardsId:'board-1',columnId:'column-1',title:'title of card 5',cover:null},
                        { id:'card-6',boardsId:'board-1',columnId:'column-1',title:'title of card 6',cover:null},
                        { id:'card-7',boardsId:'board-1',columnId:'column-1',title:'title of card 7',cover:null},
                    ]
                },
                {
                    id:'column-2',
                    boardsId:'board-1',
                    title:'To do 1 ',
                    CardOther:['card-1','card-2','card-3','card-4','card-5','card-6','card-7'],
                    cards:[
                        { id:'card-1',boardsId:'board-1',columnId:'column-2',title:'title of card 1',cover:null},
                        { id:'card-2',boardsId:'board-1',columnId:'column-2',title:'title of card 2',cover:null},
                        { id:'card-3',boardsId:'board-1',columnId:'column-2',title:'title of card 3',cover:null},
                        { id:'card-4',boardsId:'board-1',columnId:'column-2',title:'title of card 4',cover:null},
                        { id:'card-5',boardsId:'board-1',columnId:'column-2',title:'title of card 5',cover:null},
                        { id:'card-6',boardsId:'board-1',columnId:'column-2',title:'title of card 6',cover:null},
                        { id:'card-7',boardsId:'board-1',columnId:'column-2',title:'title of card 7',cover:null},
                    ]
                },
                {
                    id:'column-3',
                    boardsId:'board-1',
                    title:'To do 2',
                    CardOther:['card-1','card-2','card-3','card-4','card-5','card-6','card-7'],
                    cards:[
                        { id:'card-1',boardsId:'board-1',columnId:'column-3',title:'title of card 1',cover:null},
                        { id:'card-2',boardsId:'board-1',columnId:'column-3',title:'title of card 2',cover:null},
                        { id:'card-3',boardsId:'board-1',columnId:'column-3',title:'title of card 3',cover:null},
                        { id:'card-4',boardsId:'board-1',columnId:'column-3',title:'title of card 4',cover:null},
                        { id:'card-5',boardsId:'board-1',columnId:'column-3',title:'title of card 5',cover:null},
                        { id:'card-6',boardsId:'board-1',columnId:'column-3',title:'title of card 6',cover:null},
                        { id:'card-7',boardsId:'board-1',columnId:'column-3',title:'title of card 7',cover:null},
                    ]
                }
            ]
        }
    ]
}