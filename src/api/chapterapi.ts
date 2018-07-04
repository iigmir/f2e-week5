interface ChaptAPI {
    id: number;
    latest: boolean;
    title: string;
}

export default function( input: number ) {
    const first: ChaptAPI[] = [{
        id: 1,
        latest: false,
        title: "Chapter 1: The F2E Challenge Start!",
    },
    {
        id: 2,
        latest: true,
        title: "Chapter 2: Todo List is Going Crazy!",
    }];
    const second: ChaptAPI[] = [{
        id: 1,
        latest: false,
        title: "退屈",
    },
    {
        id: 2,
        latest: false,
        title: "エル",
    }];
    const all: any = {
        1 : first,
        2 : second,
    };
    const input2str: string = String( input );
    return all[ input2str ];
}
