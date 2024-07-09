import {deleteUploadFileById} from "../../../src/core/usecases";


const makeSut = () => {
  const deleteUploadFileByIdRepository = jest.fn();
  const sut = deleteUploadFileById({deleteUploadFileByIdRepository});
  return {
    sut, deleteUploadFileByIdRepository
  }
}

describe('Delete File', () => {
  it('Should call deleteUploadFileByIdRepository with correct params', async () => {
    const {sut, deleteUploadFileByIdRepository} = makeSut();
    await sut('any_id');
    expect(deleteUploadFileByIdRepository).toHaveBeenCalledWith('any_id');
  });

  it('Should throw if deleteUploadFileByIdRepository throws', async () => {
    const {sut, deleteUploadFileByIdRepository} = makeSut();
    deleteUploadFileByIdRepository.mockRejectedValue(new Error());
    const promise = sut('any_id');
    expect(promise).rejects.toThrow(new Error())
  })
})