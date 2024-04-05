<?php

namespace App\Controller;

use App\Repository\LivreRepository;
use App\Repository\PageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class DeletelivreController extends AbstractController
{
    private $livreRepository;
    private $pageRepository;

    public function __construct(LivreRepository $livreRepository, PageRepository $pageRepository)
    {
        $this->livreRepository = $livreRepository;
        $this->pageRepository = $pageRepository;
    }

    /**
     * @Route("/api/deletelivre/{idlivre}", name="app_deletelivre_list", methods={"DELETE"})
     */
    public function deletelivre($idlivre): JsonResponse
    {
        $this->livreRepository->deleteBookById($idlivre);

        $pages = $this->pageRepository->findByFkLivre($idlivre);

        foreach ($pages as $page) {
            $idpage = $page->getId();
            $this->pageRepository->deletePageById($idpage);
        }
    
        return new JsonResponse(['message' => 'Le livre a été supprimé avec succès.']);
    }
}
