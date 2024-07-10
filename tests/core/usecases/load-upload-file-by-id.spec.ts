import {LoadUploadFileById} from "../../../src/ports/in";
import {loadUploadFileById} from "../../../src/core/usecases";

const makeSut = () => {
  const loadUploadFileByIdRepository = jest.fn();
  const sut = loadUploadFileById({loadUploadFileByIdRepository});
  return {
    sut,
    loadUploadFileByIdRepository
  }
}

describe('LoadUploadFileById', () => {
  it('Should call loadUploadFileByIdRepository with correct param', async () => {
    const {loadUploadFileByIdRepository, sut} = makeSut();
    await sut('any_id');
    expect(loadUploadFileByIdRepository).toHaveBeenCalledWith('any_id');
  });

  it('Should throw if loadUploadFileByIdRepository throws', async () => {
    const {loadUploadFileByIdRepository, sut} = makeSut();
    loadUploadFileByIdRepository.mockRejectedValue(new Error());
    const promise = sut('any_id');
    await expect(promise).rejects.toThrow(new Error());
  })
});