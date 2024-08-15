// params는 경로에서 추출된 파라미터들을 담고 있는 객체입니다.
// path는 매칭된 경로 패턴을 나타냅니다.
// isExact는 현재 경로가 경로 패턴과 정확히 일치하는지 여부를 나타냅니다.
interface Match {
    params: { [key: string]: string };
    path: string;
    isExact: boolean;
}

// matchPath 함수는 주어진 pathname과 path를 비교하여,
// 경로가 일치하는지 확인하고, 일치하는 경우 해당 경로 파라미터를 추출합니다.
export const matchPath = (pathname: string, path: string): Match | null => {
    // keys 배열은 path에서 추출된 경로 파라미터 키들을 저장합니다.
    const keys: string[] = [];

    // path 패턴에서 파라미터 부분을 정규식 그룹으로 변환합니다.
    // 예를 들어, "/user/:id"는 "/user/([^/]+)"로 변환됩니다.
    const pattern = path
        .replace(/\/:([^/]+)/g, (_, key) => {
            keys.push(key); // 파라미터 이름을 keys 배열에 저장합니다.
            return '/([^/]+)'; // 파라미터 부분을 정규식 그룹으로 변환합니다.
        })
        .replace(/\//g, '\\/'); // 슬래시를 이스케이프하여 정규식에서 올바르게 인식되도록 합니다.

    // 변환된 패턴을 기반으로 정규식을 생성합니다.
    const regex = new RegExp(`^${pattern}$`);

    // pathname이 정규식 패턴과 일치하는지 확인합니다.
    const match = pathname.match(regex);

    // 경로가 일치하지 않으면 null을 반환합니다.
    if (!match) return null;

    // match 배열에서 URL 전체 매칭 결과와 각 파라미터 값을 추출합니다.
    const [url, ...values] = match;

    // isExact는 pathname이 완전히 일치하는지를 나타냅니다.
    const isExact = pathname === url;

    // keys 배열과 values 배열을 결합하여 params 객체를 생성합니다.
    // 예를 들어, keys=["id"], values=["123"]인 경우, params={ id: "123" }가 됩니다.
    const params = keys.reduce<{ [key: string]: string }>((acc, key, index) => {
        acc[key] = values[index];
        return acc;
    }, {});

    // 매칭된 결과를 객체 형태로 반환합니다. path, params, isExact를 포함합니다.
    return { path, params, isExact };
};
