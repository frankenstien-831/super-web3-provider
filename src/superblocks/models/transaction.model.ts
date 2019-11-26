// Copyright 2019 Superblocks AB
//
// This file is part of Superblocks.
//
// Superblocks is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation version 3 of the License.
//
// Superblocks is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Superblocks.  If not, see <http://www.gnu.org/licenses/>.

export interface IRpcPayload {
    jsonrpc: string;
    id: number;
    method: string;
    params: [any];
}


export enum MinedTransactionStatus {
    Success = '0x01',
    Fail = '0x00'
}

export interface ITransactionDetails {
    blockHash: string;
    blockNumber: number;
    hash: string;
    transactionIndex: number | null;
    nonce: number;
    from: string;
    to: string | null;
    input: any;
    value: number;
    gas: number;
    gasPrice: number;

    // Params only available once mined
    gasUsed?: number;
    contractAddress?: string;
    logs?: string;
    logsBloom?: any;
    status?: MinedTransactionStatus;
    code?: any;
    blockTime?: any;
}

export interface ITransactionModel {
    projectId: string;
    buildConfigId: string;
    jobId: string;
    from: string;
    networkId: string;
    rpcPayload: IRpcPayload;

    // This will only be available when the receipt is in place
    transactionDetails?: ITransactionDetails;
}