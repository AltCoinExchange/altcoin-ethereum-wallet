export declare module AbiUtil {
    enum AbiType {
        uint = 0,
        uint256 = 1,
        address = 2,
        bool = 3,
        bytes32 = 4,
        bytes20 = 5,
    }
    const abiParams: (functionData: any, returnType: any, ...params: any[]) => (target: any, functionName: string, descriptor: PropertyDescriptor) => void;
    const getAbiParams: (target: any, propertyKey: string) => any;
}
