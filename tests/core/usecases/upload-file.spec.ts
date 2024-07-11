import {uploadFile} from "../../../src/core/usecases";
import {Upload} from "../../../src/core/models";
import {generateUri} from "../../../src/core/helpers";


const makeSut = () => {
  const mockedUpload = () => ({
    id: 'any_id',
    name: 'any_name',
    mimeType: 'any_mime',
    size: 0.3,
    key: 'any_key',
    createdAt: new Date(),
    updatedAt: new Date()
  })
  const uploadFileRepository = jest.fn().mockResolvedValue(mockedUpload());
  const sut = uploadFile({uploadFileRepository})
  return {
    sut,
    mockedUpload,
    uploadFileRepository
  }
}

describe("UploadFile", () => {
  it("Should call uploadFileRepository with correct params", async () => {
    const {sut, uploadFileRepository} = makeSut();
    const params = {
      name: 'any_name',
      mimeType: 'any_mime',
      size: 0.3,
      key: 'any_key',
    }
    await sut(params)
    expect(uploadFileRepository).toHaveBeenCalledWith(params)
  })

  it('Should throw if uploadFileRepository throws', async () => {
    const {sut, uploadFileRepository} = makeSut();
    uploadFileRepository.mockRejectedValue(new Error());
    const params = {
      name: 'any_name',
      mimeType: 'any_mime',
      size: 0.3,
      key: 'any_key',
    }
    const promise =  sut(params)
    await expect(promise).rejects.toThrow(new Error())
  })

  it('Should return a file url on success', async () => {
    const {sut, mockedUpload} = makeSut();
    const params = {
      name: 'any_name',
      mimeType: 'any_mime',
      size: 0.3,
      key: 'any_key',
    }
    const result =  await sut(params);
    const upload = mockedUpload();
    expect(result).toEqual({url: generateUri(upload.key)})
  })

});